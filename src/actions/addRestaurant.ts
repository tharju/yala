import { addRestaurant } from '@/services/restaurants';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { RestaurantFormState } from '@/components/Form/AddRestaurantForm';

export const addRestaurantAction = async (
  prevState: RestaurantFormState,
  formData: FormData,
) => {
  const response = await addRestaurant(prevState, formData);

  if (response.errors === undefined) {
    toast.success('Restaurant added!');
    redirect('/restaurants');
  }

  if (
    response.errors &&
    'send' in response.errors &&
    response.errors.send !== undefined
  ) {
    toast.error('Failed to add restaurant');
  }

  return response;
};