// services
import { getCategoryData } from '@/services';

// types
import { ICategoryItem, IMenu } from '@/types';

// componens
import { BurgerMenu } from '@/ui/components';

const CategoryBurgerMenu = async () => {
  const { data: categoryDataResponse = [] } = await getCategoryData();

  const listCategories: IMenu[] = [];

  categoryDataResponse?.map((category: ICategoryItem) => {
    const { id } = category;
    const { name } = category.attributes;

    listCategories.push({
      id: id.toString(),
      name: name,
    });
  });

  return <BurgerMenu listCategories={listCategories} />;
};

export default CategoryBurgerMenu;
