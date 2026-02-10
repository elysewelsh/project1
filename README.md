https://ipaddressew.netlify.app

This is Frontend Mentor challenge to allow users to:
•	See their own IP Address on the map on the initial page load
•	Search for any IP addresses or domains and see the key information and location
•	View the optimal layout for each page depending on their device's screen size
•	See hover states for all interactive elements on the page

The site uses IPify to get geographical information about an IP address and uses that information to display a map by Leaflet. It is written in TypeScript. It requires Node, Parcel, and Netlify CLI.

REFLECTIONS

I had 31 commits and there will likely be more. Here is a breakdown of hours worked:
•	Monday, 2/2: 4 hours
•	Tuesday, 2/3: 6 hours
•	Saturday, 2/7: 6.5 hours
•	Sunday, 2/8: 6.75 hours
•	Monday, 2/9: 3 hours (plus the time to write this document)

I’ve spent about 27 hours on this project total.

The issues that took the most time were: breaking the functions into their own modules, making the CSS responsive to smaller screens, re-drawing the map image when input is updated, and deployment.

Breaking the functions down to their own modules wasn’t difficult, but it was time consuming and thought-provoking.

Making the CSS responsive seemed impossible. I was able to make a border appear when the screen hit the limit on my media query, but nothing else would change. I finished other parts of the project before returning to this part, googled “@media query”, and found that I didn’t include “and screen” in my query. Silly.

Re-drawing the map took a lot of research. The Leaflet documentation was not helpful. I tried map.remove() and map.off(), clearing the innerHTML, and even went as far as to delete the map div and add it back before re-running the function to make the map. Nothing worked. Then I found a StackOverflow answer about removing the outerHTML and re-setting it to what it was before the map initializes. When I console.logged the outerHTML of my map div, I saw what the post was talking about because it was 20 lines of code inserted into the div attributes. Clearing the outerHTML div and resetting it thankfully worked.

Deployment is still a mystery to me. Mithra was really helpful and gave me instructions to follow. I never ended up trying them because I immediately started deployment as soon as I could. I quickly ran into an error where my API key was shared because Parcel was turning my “secret variable” into a non-secure string when it was transpiling everything. When I complained to them, my friend asked me why I wasn’t using “Netlify dev” instead of Parcel for local builds. I had no idea, so I started looking at the documentation on Netlify CLI and googling how to keep my API key safe. 

Apparently, it was necessary to still hide the API key from the front-end even though you give it to Netlify? I still don’t understand why this wouldn’t work. At any rate, I had to install Netlify CLI and make a Netlify function. (I deleted most of my code before I realized that the function was re-writing most of my API call that I already had, so that took longer than normal too because I basically re-wrote the whole function again.) Because Netlify is running stuff in the back-end, I had to make a new config file as well: Netlify.toml. (Again, this is all still a mystery to me and I have the Netlify documentation, but, if I wouldn’t have known someone who has used this before, I’d be lost.)

(I urge you to look at Commit 27 if you want to see my own fetch code before Netlify got involved.)

This is a huge deal for me though. I’m able to do API calls and deploy continuously!

I’m going to continue working on trying to get the location marker working. I might eventually try to import the image, but that didn’t work well when I tried it early on, so I’m very hesitant to mess with the project at this point. 

I just realized it doesn’t load the user’s IP address, so I’m going to work on that before midnight.
