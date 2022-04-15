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
      path: '',
      redirectTo: 'log-in',
      pathMatch: 'full',
    },
  ],
}]
