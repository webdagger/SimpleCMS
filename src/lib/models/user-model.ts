// The user table stores the users
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		// Will be generated by Lucia
		_id: {
			type: String
		},

		// Other User Properties
		email: String,
		role: String,
		username: String,
		firstname: String,
		lastname: String,
		avatar: String,
		resetRequestedAt: String,
		resetToken: String
	},

	// Let Lucia handle the _id field
	{ _id: false }
);

export const User = mongoose.model('user', UserSchema);
