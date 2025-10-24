import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ICourse } from '../../model/course-model';
import { CourseService } from '../course.service';

export const courseResolverResolver: ResolveFn<ICourse> = (route, state) => {
  const courseService = inject(CourseService);
  return courseService.fetchById(route.params['courseId']);
};
