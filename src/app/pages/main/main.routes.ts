import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";
import { UserComponent } from "./user/user.component";

export const mainRoutes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'category',
      loadChildren: () =>
        import('./categories/categories.module').then((m) => m.CategoriesModule),
    },
    {
      path: 'user',
      // component: UserComponent
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    {
      path: 'competition',
      // component: UserComponent
      loadChildren: () =>
        import('./competition/competition.module').then((m) => m.CompetitionModule),
    },
    {
      path: 'introduce',
      component: IntroductionComponent
    },
    {
      path: '',
      redirectTo: 'log-in',
      pathMatch: 'full',
    },
  ],
}]
