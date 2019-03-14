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
    public dashboard: string = "dashboard";

    // routes to login
    public login: string = 'auth/login'

    public signup: string =  "auth/signup"
    
    public forget: string = "auth/forget_password"


    // route Schedule Manager
    public scheduleManagerSchedules = 'application/schedule_manager/schedules'

    public scheduleManagerAssignment = 'application/schedule_manager/assignments'
    
    public scheduleManagerDriverAssignment = 'application/schedule_manager/driver_assignment'

    public scheduleManagerDriverSchedule = 'application/schedule_manager/driver_schedule'

}