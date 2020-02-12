import React, { Fragment } from 'react';
import { getImagePath } from './Helpers';

export const getAllProjectInfo = () => {
  return {
    projects: [
      {
        rows: [
          {
            projectInfo: [
              {
                image: `${getImagePath()}/project-1/p-1.png`,
                mobileImage: true,
                title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
                description: (
                  <Fragment>
                    - Created an API to convert any voice command that has been received by the Micro Controller into a form of actions. The API will received the voice command and then it will find the keywords that matched with the registered device name and also the keywords for the actions whether to turning it on or off.
                    <br/>
                    - Created simple CRUD process to create new users account, new devices, edit users profiles, edit devices info, API for the the Micro controller to read new set of actions for the registered devices and deleting registered devices.
                    <br/>
                    - use Bootstrap framework for css
                  </Fragment>
                ),
              },
              {
                image: `${getImagePath()}/project-1/p-2.png`,
                mobileImage: true,
                title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
                description: "Users can add new devices in this views."
              },
              {
                image: `${getImagePath()}/project-1/p-3.png`,
                mobileImage: true,
                title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
                description: (
                  <Fragment>
                    - Using Onesignal to send notifications to user mobile when the system detected a security breach.
                    <br/>
                    - User have the ability to turn on or off devices manually from the web app or from voice recognition.
                  </Fragment>
                ),
              },
              {
                image: `${getImagePath()}/project-1/p-4.png`,
                mobileImage: true,
                title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
                description: "User profiles page that shows how many active devices"
              },
              {
                image: `${getImagePath()}/project-1/p-5.jpeg`,
                mobileImage: false,
                title: "Voice Recognition for Smart Home System Using Intel Usquared IoT Board",
                description: "Project prototype"
              }
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          },
          {
            projectInfo: [
              {
                image: `${getImagePath()}/project-2/p-1.png`,
                mobileImage: false,
                title: "Simple Ecommerce Website",
                description: (
                  <Fragment>
                    - Create CRUD for admin panel to add new banner, new product, delete product, delete banner, update banner & products, read list of registered users & products & banner and list of ordered products from users.
                    <br/>
                    - Products are shown in card manners with a price tag and can be separated by categories.
                    <br/>
                    - User can check the product info of the product when they clicked on the product card
                  </Fragment>
                )
              },
              {
                image: `${getImagePath()}/project-2/p-2.png`,
                mobileImage: true,
                title: "Simple Ecommerce Website",
                description: "Mobile view"
              },
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          },
        ],
      },
      {
        rows: [
          {
            projectInfo: [
              {
                image: `${getImagePath()}/grey-background.jpeg`,
                mobileImage: false,
                title: "Library System",
                description: (
                  <Fragment>
                    - Authentication for admin to entered the admin panel.
                    <br/>
                    - Create CRUD API to show list of books, create books, search for books by (id, title, book order number, rack position and genre), delete books and update existing books info
                  </Fragment>
                )
              }
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          },
          {
            projectInfo: [
              {
                image: `${getImagePath()}/grey-background.jpeg`,
                mobileImage: false,
                title: "Report Writing System",
                description: (
                  <Fragment>
                    - Authentication for users, lecturers, and admin that have different views and access
                    <br/>
                    - Users can write new report and it will be auto generated in pdf forms and users will have an ability to directly send the link to lecturers whatsapp number
                    <br/>
                    - Lecturers have the ability to see submitted reports based on class that they are assigned to
                    <br/>
                    - Admin have the ability to assigned lecturers to which classes and create a new lecturers and students account
                  </Fragment>
                )
              }
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          }
        ],
      },
      {
        rows: [
          {
            projectInfo: [
              {
                image: `${getImagePath()}/grey-background.jpeg`,
                mobileImage: false,
                title: "Shop Inventory System",
                description: (
                  <Fragment>
                    - Create admin panel for admin and staff that have different access and views
                    <br/>
                    - Admin will have the ability to add new product, delete product, check list of transaction, graph of current inventory quantity with a specific amount maximum quantity that has been set and also the ability to check different data for different branch
                    <br/>
                    - Staff will have the ability to add new transaction per day and it will automatically calculate the total gross income and total income after deducted with item price.
                    <br/>
                    - Staff will also have the ability to insert the quantity of new items that they received.
                  </Fragment>
                )
              }
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          },
          {
            projectInfo: [
              {
                image: `${getImagePath()}/grey-background.jpeg`,
                mobileImage: false,
                title: "Hospital Schedule System",
                description: (
                  <Fragment>
                    - Create an admin panel that have the ability to create a list of new staff and it will automatically assigned the staff into the scheduling systems based on their roles and department.
                    <br/>
                    - Simple CRUD systems that have the ability to edit manually the schedule, edit staff info, create new staff, read list of staff, read list of schedule based on month and delete staff info or schedule
                    <br/>
                    - Admin have the ability to re-generate the schedule based on month
                  </Fragment>
                )
              }
            ],
            toolsLogo: [
              `${getImagePath()}/laravel-logo.png`,
              `${getImagePath()}/onesignal-logo.png`,
              `${getImagePath()}/bootstrap-logo.png`,
            ],
          },
        ],
      },
    ],
  }
}
