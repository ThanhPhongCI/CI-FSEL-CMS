import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";

export const mainRoutes = [{
    path: '',
    component: MainComponent,
    children: [
        {
          path: 'home',
          component: HomeComponent,
        },
        {
            path: 'category',
            loadChildren: () =>
                 import('./categories/categories.module').then((m) => m.CategoriesModule),
        },
        {
          path: '',
          redirectTo: 'log-in',
          pathMatch: 'full',
        },
      ],
}]