import { fetchAPI } from "./index";

export async function listCategories() {  
  try {
    const categories = await fetchAPI({ 
    path: `/categories`    
   });
    return categories;
  } catch (error) {
    console.error(error);
  }
}
