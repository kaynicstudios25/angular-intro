import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AboutUs } from './features/about-us/about-us';
import { Product } from './features/product/product';
import { LearnMore } from './features/learn-more/learn-more';


export const routes: Routes = [
    {  
         path: 'home', 
         component: Home, 
         title: 'Home Page'
    },

    {  
         path: 'about-us', 
         component: AboutUs, 
         title: 'About Us', 
    },

    {
        path: 'learn-more',
        component: LearnMore,
        title: 'Learn More'
    },

    {   
        path: 'product', 
        component: Product, 
        title: 'Products'
    }

];
