import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Dog Food', 'Cat Food', 'Dog Toys', 'Cat Toys', 'Pet Supplies', 'Grooming', 'Health & Wellness']
  },
  petType: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'bird', 'fish', 'small-mammal', 'reptile']
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  specifications: [{
    name: String,
    value: String
  }],
  features: [String],
  brand: {
    type: String,
    required: true
  },
  weight: {
    value: Number,
    unit: {
      type: String,
      enum: ['g', 'kg', 'oz', 'lb']
    }
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: {
      type: String,
      enum: ['cm', 'in']
    }
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    title: String,
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
productSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Virtual for formatted price
productSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toFixed(2)}`;
});

// Method to update stock
productSchema.methods.updateStock = async function(quantity) {
  if (this.stock < quantity) {
    throw new Error('Insufficient stock');
  }
  this.stock -= quantity;
  return this.save();
};

// Method to add review
productSchema.methods.addReview = async function(userId, rating, title, comment) {
  this.reviews.push({ userId, rating, title, comment });
  
  // Update average rating
  const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
  this.ratings.average = totalRating / this.reviews.length;
  this.ratings.count = this.reviews.length;
  
  return this.save();
};

export default mongoose.model('Product', productSchema);