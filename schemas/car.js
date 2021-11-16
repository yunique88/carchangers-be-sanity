export default {
    name: 'car',
    title: 'Car',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        },
        {
            name: 'carType',
            title: 'Car Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Hatchback', value: 'hatchback' },
                    { title: 'Sedan', value: 'sedan' },
                    { title: 'SUV', value: 'SUV' },
                    { title: 'Convertible', value: 'convertible' },
                    { title: 'Antique', value: 'antique' },
                    { title: 'Luxury', value: 'luxury' },
                    { title: 'Coupe', value: 'coupe' },
                    { title: 'Limousine', value: 'limousine' },
                    { title: 'Van', value: 'van' },
                    { title: 'Truck', value: 'truck' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'carImage'}]
        },
        {
            name: 'pricePerHour',
            title: 'Price Per Hour',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'host',
            title: 'Host',
            type: 'host'
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{type: 'review'}]
        },
        {
            name: 'seats',
            title: 'Seats',
            type: 'number'
        },
        {
            name: 'doors',
            title: 'Doors',
            type: 'number'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number'
        },
        {
            name: 'make',
            title: 'Make',
            type: 'string'
        },
        {
            name: 'model',
            title: 'Model',
            type: 'string'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string'
        },
        {
            name: 'fuelType',
            title: 'Fuel Type',
            type: 'string'
        },
        {
            name: 'mileage',
            title: 'Mileage',
            type: 'number'
        }
    ]
}