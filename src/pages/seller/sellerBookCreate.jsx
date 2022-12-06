import { useProductStore } from '../../store';
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Book from '../../components/Book/Book';
import { useMutation } from 'react-query';
import { createBook } from '../../api/sellerApi';
import PostButton from '../../components/Buttons/PostButton';
import Error from '../../components/Error/Error';
import FormField from '../../components/Form/FormField';
import BookPreview from '../../components/Book/BookPreview';

const SellerBookCreate = () => {
  const { setTitle, setAuthor, setDescription, setBookImage, setPrice, setStock } = useProductStore((state) => state);
  const navigate = useNavigate()
  const sellerId = useParams().sellerId
  const { resetProductStore } = useProductStore((state) => state);

  const { mutate: sellerCreateBook, isLoading } = useMutation(({ sellerId, bookData }) => createBook(sellerId, bookData), {
    onSuccess: (data) => {

      const { bookSaved } = data
      const { _id } = bookSaved
      if (_id) {
        resetProductStore()
        navigate(`/seller/${sellerId}/books/`)
      }

    },
    onError: (error) => {
      console.log(error)
    }
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.role = 'seller'

    sellerCreateBook({ sellerId, bookData: data })
  };

  return (
    <section className="page-container">
      <div className="flex flex-col gap-5 mx-auto">
        <div className=" text-3xl font-special">
          <h6>| Book Store</h6>
        </div>
        <h2 className=" text-xl">
          <span className="text-2xl">📚</span> Create a new book:
        </h2>
        <section className='grid grid-cols-1 md:grid-cols-2 md:gap-6  lg:gap-24'>
          <BookPreview />
          <div className="sub-container -order-1">
            <form className="form-ctn" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-gray-700 text-xl pb-2 underline">Create Here</h3>
              <FormField
                label='Book Title'
                name={'title'}
                type={'text'}
                register={register}
                errors={errors}
                rules={{ required: true }}
                handleOnChange={setTitle}
              />
              <FormField
                label='Author'
                name={'author'}
                type={'text'}
                register={register}
                errors={errors}
                rules={{ required: true }}
                handleOnChange={setAuthor} />
              <FormField
                label='Description'
                type={'textarea'}
                register={register}
                name={'description'}
                rules={{ required: true }}
                handleOnChange={setDescription}
              />
              <div className="grid grid-cols-2 gap-5 flex-col-reverse">
                <FormField
                  label="Price"
                  type="number"
                  name="price"
                  register={register}
                  errors={errors}
                  rules={{ required: true, pattern: /^\d+$/, message: 'Price must be a number' }}
                  handleOnChange={(value) => setPrice(value)}
                />
                <FormField
                  label="Stock"
                  type="number"
                  name="stock"
                  register={register}
                  errors={errors}
                  rules={{ required: true, pattern: /^\d+$/, message: 'Stock must be a number' }}
                  handleOnChange={setStock}
                />
              </div>
              <FormField
                label='Paste Image URL'
                type='text'
                name='image'
                register={register}
                errors={errors}
                rules={{ required: true }}
                handleOnChange={setBookImage}
              />
              <PostButton isLoading={isLoading} buttonTitle="Create Book" />
              <Error />
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SellerBookCreate;
