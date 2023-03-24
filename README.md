# Podcasts

In this application there are 3 pages:
- #### Home
- #### Podcast
- #### Episode

## Application description:

Each page uses common layout, with header and container. In the header there is an application caption that is a link to the home page, and the loader spinner, which shows loading state.

Getting podcast information happens in custom hooks. Layer business logic should be in custom hooks, for reuse its. And the view components should display ready and serialized data  

For avoid pass many props to the child components, was created the context with common podcast information (description). For small applications like this It's enough. But for bigger apps, better way is using state manager, like Redux or Apollo Graphql (depends on backend part).

To make the development process easier, tools such as eslint and prettier were added.

## Pages details:

In th Home page is showing all podcasts. In the top right corner there is a search bar. You can filter podcast's list by typing in this search field.

Podcast page has main podcast information, like title, artist name, description and image. Also, this page has list of as max 20 episodes of current podcast. By clicking to some episode, you redirect to the Episode page.

Episode page has the same block with podcast information, and description of selected episode. Besides, there is the audio player which player that allows you to listen to a podcast episode.

## You can run app with two commands:

Development mode: 
    `npm run start`

Production mode:
    `npm run build`, then `npm run serve`