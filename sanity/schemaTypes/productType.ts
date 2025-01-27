import {defineField, defineType} from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Product',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'description',
      title: 'Description of Product',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
   // defineField({
   //   name: 'price_id',
   //   title: 'Stripe Price ID',
   //   type: 'string',
   // }),
   defineField({
     name: 'category',
     title: 'Product Category',
     type: 'reference',
     to: [{type: 'category'}],
   }), 
  ],
});


