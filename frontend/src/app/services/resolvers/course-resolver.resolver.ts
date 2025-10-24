import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CourseService } from '../course.service';
import { ICourse } from '../../model/course-model';
import { Subscription } from 'rxjs';

export const courseResolverResolver: ResolveFn<ICourse> = (route, state) => {
  const courseService = inject(CourseService);
  return courseService.fetchById(route.params['courseId']);
};
