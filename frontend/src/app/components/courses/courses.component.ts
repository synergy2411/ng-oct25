import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICourse } from '../../model/course-model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  allCourses!: Array<ICourse>;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdRef.detach();

    this.courseService
      .fetchAll()
      .subscribe((courses) => (this.allCourses = courses));

    this.cdRef.reattach();

    // this.cdRef.markForCheck()     // OnPush Change Detection Strategy
  }

  onCourseSelect(courseId: string) {
    this.router.navigateByUrl(`courses/${courseId}`);
  }

  trackByIndex(index: string) {
    return index;
  }
}
