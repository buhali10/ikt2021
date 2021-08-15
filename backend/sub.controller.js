import webpush from 'web-push';

const publicVapidKey = 'BK2hy0G6j7BGr2cjcUB2c-CmA4b343IvEt9BlS1oHXo0EGYzPzRjUnxAXyjc5JLzy5W0Lh-TWaiWUnypBKv4gyQ';
const privateVapidKey = 'B3Gj7RXsMsQoL0Xosej3nXnZ_yg07e6Sx13TuJrzwVM';

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cMdUtRW4H9o:APA91bG8p3o-Ta31e1yMrqdvonJCyf3xbPfIFtpS2UbX9PcJwkeNKoQjZhEAWo5nad7eR3NgRQR8__3wk591j7DKWJLGzwWgJYm_GgipU0gTvMRpWA6TpmCtrD9OCo1mB0jZQrTj5a_5',
    keys: {
        auth: 'fJRvyO_fnPXsYeDkMy_jAA',
        p256dh: 'BDhH_TBG4l-PU3wJnT6wHqsPeYusbPqOiw7VvJvupXDC3JZOIIOiz2Ml8ZaZD9wJuGnXs9BFqINEzrFStsjkk6c',
    }
};
export const SubscriptionController = {

    subscribe: (req, res) => {
        const subscription = req.body;
        console.log('subscription', subscription);
        res.status(201).json({ message: 'subscription received'});
    },

    sendNotification: () => {
        webpush.setVapidDetails('mailto:freiheit@htw-berlin.de', publicVapidKey, privateVapidKey);
        const payload = JSON.stringify({
            title: 'New Push Notification',
            content: 'New data in database!',
            openUrl: '/help'
        });
        webpush.sendNotification(pushSubscription,payload)
            .catch(err => console.error(err));
        console.log('push notification sent');
    }
}
