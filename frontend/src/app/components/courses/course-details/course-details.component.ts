import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ICourse } from '../../../model/course-model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  course!: ICourse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    let courseId = this.route.snapshot.params['courseId'];
    this.courseService
      .fetchById(courseId)
      .subscribe((course) => (this.course = course));
  }
}
