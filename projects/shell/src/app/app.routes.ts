import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },

    {
      path: 'flights',
      // Esta es la forma tradicional de cargar un módulo usando remote en la config del webpack y decl.d.ts
      // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)

      //Esta es la forma con loadREmoteModule
      // loadChildren: () =>
      //   loadRemoteModule({
      //      type: 'module',
      //      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      //      exposedModule: './Module'
      //  })
      //  .then(m => m.FlightsModule)

      //  The imported loadManifest function also loads the remote entry points.
      // Esta es la opcion con manifest
      loadChildren: () =>
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe1',
            exposedModule: './Module'
        })
        .then(m => m.FlightsModule)

    },


    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
