import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
   * Route Path 
   * This is a class that stores all the routing path for the application 
   * from this we are able to better control the route update across the application
   */
export class RoutePath {

    // routes to dashboard
    public application: string = 'application';
    // public dashboard: string = "dashboard";

    // routes to login
    public login: string = 'auth/login'

    public signup: string =  "auth/signup"
    
    public forget: string = "auth/forget_password"

    // route links for dashboard
    public dashboard = {
        path: {
            main: 'application/dashboard'
        }
    }

    // route Schedule Manager
    public scheduleManagerAssignment = 'application/schedule_manager/assignments'
    
    public scheduleManagerDriverAssignment = 'application/schedule_manager/driver_assignment'

    public scheduleManagerDriverSchedule = 'application/schedule_manager/driver_schedule'


    public scheduleManager = {
        path: {
            driverSchedule: 'application/schedule_manager',
            routes: 'application/schedule_manager/all_routes',
            bus_inventory: 'application/schedule_manager/inventory',
            inspector_schedule: 'application/schedule_manager/inspectors',
            inspector_new: 'application/schedule_manager/new_inspector_schedule',
            bus_and_terminal: 'application/schedule_manager/bus_and_terminal',
            bus_depot: 'application/schedule_manager/bus_and_depot'
        }
    }

    

    

}