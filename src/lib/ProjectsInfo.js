import React, { Fragment } from 'react';
import { getImagePath } from './Helpers';

export const getAllProjectInfo = () => {
  return [
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
    }
  ]
}
