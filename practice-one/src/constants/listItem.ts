import { IMenu, ISlideItem } from "@/types";

const listTypePosts: string[] = ["New", "Trendy", "Popular", "Top"];

const listCategories: IMenu[] = [
  {
    key: "World",
    name: "World News",
    path: "/category/worldnews",
  },
  {
    key: "National",
    name: "National News",
    path: "/category/nationalnews",
  },
  {
    key: "Local",
    name: "Local News",
    path: "/category/localnews",
  },
  {
    key: "Business",
    name: "Business and Finance",
    path: "/category/business-and-finance",
  },
  {
    key: "Technology",
    name: "Technology",
    path: "/category/technology",
  },
  {
    key: "Health",
    name: "Health and Wellness",
    path: "/category/health-and-wellness",
  },
  {
    key: "Science",
    name: "Science and Environment",
    path: "/category/science-and-environment",
  },
  {
    key: "Entertainment",
    name: "Entertainment",
    path: "/category/entertainment",
  },
  {
    key: "Sports",
    name: "Sports",
    path: "/category/sports",
  },
  {
    key: "Lifestyle",
    name: "Lifestyle",
    path: "/category/lifestyle",
  }
];

const listNavItems: IMenu[] = [
  {
    key: "pages",
    name: "Pages",
    path: "/pages",
  },
  {
    key: "contact",
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    key: "about",
    name: "About Us",
    path: "/about-us",
  },
];


const listSlider: ISlideItem[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1716995164712-a5a4e72a8d67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "Exploring Urban Wonders: The Joy of a Street Walk",
    content:
      "Immerse yourself in the urban landscape by taking a street walk. Marvel at architectural wonders, enjoy spontaneous street performances, and soak in the vibrant energy that defines city life. Each step offers a new adventure.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpZGVybWFufGVufDB8fDB8fHww",
    title: "Culinary Journeys: Street Food Adventures",
    content:
      "Embark on a culinary journey through the streets, where the aroma of diverse cuisines fills the air. Taste the flavors of the world, from food trucks to street vendors, and experience the city’s culinary heartbeat.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1674606033420-f9a43a1dde41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",

    title: "Historical Strolls: Walking Through Time",
    content:
      "Take a walk back in time as you traverse historical streets. Learn about the rich heritage and significant events that shaped the city. Each building and monument has a tale to tell, connecting the past with the present.",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzkxNDZ8fGVufDB8fHx8fA%3D%3D",
    title: "Architectural Wonders: Discovering Urban Design on Foot",
    content:
      "Explore the city’s architectural wonders on foot. From modern skyscrapers to historic facades, the streets are lined with impressive structures that showcase the evolution of design and engineering over the years.",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1716857892273-3649e30f09b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    title: "Serendipitous Encounters: The Magic of Street Walking",
    content:
      "Embrace the serendipity of street walking, where unexpected encounters and spontaneous discoveries make each journey unique. Whether it’s a street musician or a hidden alley, the magic lies in the surprises along the way.",
  },
];

export { listTypePosts, listCategories, listNavItems, listSlider };
