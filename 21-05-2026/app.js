// CALLBACK HELL 

// console.log("Start");

// setTimeout(() => {
//     console.log("1st setTimeout");
// });


// console.log("End");

const cart = [
    {
        name: "Laptop",
        price: 1000,
        quantity: 1
    },
    {
        name: "Phone",
        price: 500,
        quantity: 2
    },
    {
        name: "Headphones",
        price: 100,
        quantity: 3
    }
]

// const total = cart.map((item) => {
//     return item.price * item.quantity;
// }).reduce((acc, curr) => { return acc + curr }, 0)

// console.log(total);


// CallBack Hell


// const order = api.createOrder(cart, function (orderId) {
//     api.processPayment(orderId, function (paymentId) {
//         console.log("Payment processed with ID:", paymentId);
//         api.shipOrder(orderId, function (trackingId) {
//             console.log("Order shipped with tracking ID:", trackingId);
//             api.deliverOrder(trackingId, function (deliveryStatus) {
//                 console.log("Order delivery status:", deliveryStatus);
//                 api.sendFeedbackRequest(orderId, function (feedbackStatus) {
//                     console.log("Feedback request status:", feedbackStatus);
//                     api.handleCustomerSupport(orderId, function (supportStatus) {
//                         console.log("Customer support status:", supportStatus);
//                         api.updateInventory(cart, function (inventoryStatus) {
//                             console.log("Inventory update status:", inventoryStatus);
//                             api.RefundPayment(orderId, function (refundStatus) {
//                                 console.log("Refund status:", refundStatus);
//                                 api.RefundStatus(orderId, function (refundStatus) {
//                                     console.log("Refund status:", refundStatus);
//                                     api.CancelOrder(orderId, function (cancelStatus) {
//                                         console.log("Cancel order status:", cancelStatus);
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 });
//             });
//         });
//     });
// });


// PROMISE Chaining 

// Promise States : pending, fulfilled, rejected

// const order = api.createOrder(cart)

// order.then((orderId) => {
//     return api.processPayment(orderId)
// }).then((paymentId) => {
//     console.log("Payment processed with ID:", paymentId);
//     return api.shipOrder(orderId);
// }).then((trackingId) => {
//     console.log("Order shipped with tracking ID:", trackingId);
//     return api.deliverOrder(trackingId);
// }).then((deliveryStatus) => {
//     console.log("Order delivery status:", deliveryStatus);
//     return api.sendFeedbackRequest(orderId);
// }).then((feedbackStatus) => {
//     console.log("Feedback request status:", feedbackStatus);
//     return api.handleCustomerSupport(orderId);
// }).then((supportStatus) => {
//     console.log("Customer support status:", supportStatus);
//     return api.updateInventory(cart);
// }).then((inventoryStatus) => {
//     console.log("Inventory update status:", inventoryStatus);
//     return api.RefundPayment(orderId);
// }).then((refundStatus) => {
//     console.log("Refund status:", refundStatus);
//     return api.RefundStatus(orderId);
// }).then((refundStatus) => {
//     console.log("Refund status:", refundStatus);
//     return api.CancelOrder(orderId);
// }).then((cancelStatus) => {
//     console.log("Cancel order status:", cancelStatus);
// }).then(() => {
//     console.log("All operations completed successfully.");
// })
//     .catch((error) => {
//         console.error("Error:", error);
//     })

// console.log("Order processing initiated...");



const posts = fetch("https://jsonplaceholder.typicode.com/posts/25")


posts.then((res) => {
    return res.json()
}).then((data) => {
    console.log("Post data:", data);
}).catch((error) => {
    console.error("Error fetching post:", error);
}).finally(() => {
    console.log("Fetch operation completed.");
})