import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService
      .fetchAll()
      .subscribe((courses) => (this.allCourses = courses));
  }

  onCourseSelect(courseId: string) {
    this.router.navigateByUrl(`courses/${courseId}`);
  }
}
