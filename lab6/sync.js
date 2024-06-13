const sequelize = require('./db/connect.mysql');
const User = require('./models/user.mysql');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Database synced successfully!");

        const jane = User.build({
            username: 'JaneDoe',
            hashedPassword: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            email: 'jane.doe@example.com'
        });

        console.log(jane.username); // Output: 'JaneDoe'

        await jane.save();
        console.log('Jane has been saved to the database');

        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log('All users:', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

// Execute the syncDatabase function
syncDatabase();
