import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User Name is required'],
    trim: true,
    minlength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'User Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: function () {
      return this.provider === 'email';
    },
    minlength: 6,
  },
  provider: {
    type: String,
    enum: ['email', 'google'],
    default: 'email',
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: {
    type: String,
    default: null,
  },
  emailVerificationExpires: {
    type: Date,
    default: null,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
}, { timestamps: true });

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    delete ret.emailVerificationToken;
    delete ret.resetPasswordToken;
    return ret;
  },
});

const User = mongoose.model('User', userSchema);

export default User;
