<template>
    <div class="container px-3">
        <h3>Checkout ( {{ $store.getters.cartCount }} )</h3>
        <div class="row g-0">
            <div class="col-md-8">
                <CartItem />
            </div>
            <div class="col-md-4">
                <div class="container ms-2">

                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Shipping Address</div>
                        </div>
                        <div class="card-body">

                            <div class="form-group mb-2">
                                <label for="shippingFullName">Full Name</label>
                                <input type="text" class="form-control" placeholder="Full Name" id="shippingFullName"
                                    v-model="shippingFullName" autofocus required>
                            </div>

                            <div class="form-group mb-2">
                                <label for="shippingContactNumber" class="form-label">Contact Number</label>
                                <input type="number" pattern="[0-9]" class="form-control no-arrow"
                                    placeholder="01xxxxxxxxx" id="shippingContactNumber" v-model="shippingContactNumber"
                                    required>
                            </div>

                            <div class="form-group mb-2">
                                <label for="shippingAddress" class="form-label">Full Address</label>
                                <textarea class="form-control" placeholder="Full Address" v-model="shippingAddress"
                                    required></textarea>
                            </div>

                        </div>
                    </div>


                    <div class="card mt-3">
                        <div class="card-header">
                            <div class="card-title">Billing Address</div>
                        </div>
                        <div class="card-body">
                            <div class="col-12">
                                <div class="form-check">
                                <input type="checkbox" class="me-2" id="checkbox" v-model="sameAddress" />
                                <label for="checkbox" > Same as Shipping Address</label>
                                </div>
                                {{ sameAddress }}
                            </div>

                            <div class="form-group mb-2">
                                <label for="BillingFullName">Full Name</label>
                                <input type="text" class="form-control" placeholder="Full Name" id="BillingFullName"
                                    v-model="BillingFullName" required>
                            </div>

                            <div class="form-group mb-2">
                                <label for="BillingContactNumber" class="form-label">Contact Number</label>
                                <input type="number" pattern="[0-9]" class="form-control no-arrow"
                                    placeholder="01xxxxxxxxx" id="BillingContactNumber" v-model="shippingContactNumber"
                                    required>
                            </div>

                            <div class="form-group mb-2">
                                <label for="BillingAddress" class="form-label">Full Address</label>
                                <textarea class="form-control" placeholder="Full Address" v-model="BillingAddress"
                                    required></textarea>
                            </div>

                        </div>
                    </div>


                    <div class="card mt-3">
                        <div class="card-header">
                            Payment Method
                        </div>
                        <div class="card-body">
                            <div class="form-group mb-2">
                                <select class="form-select shadow-none" v-model="PaymentMethod"
                                    @change="changePaymentMethod($event)" required>
                                    <option value="">Select Payment Method</option>
                                    <option value="mobile-banking">Mobile Banking</option>
                                    <option value="bank-deposit">Bank Deposit</option>
                                    <option value="credit-card">Credit Card</option>
                                    <option value="paypal">Paypal</option>
                                    <option value="cod">cod</option>
                                </select>

                                <div class="row g-0 mt-2 p-1">
                                    <div v-if="PaymentMethod == 'mobile-banking'" class="col-12"
                                        :class="showPaymentForm ? 'd-block' : 'd-none'">
                                        <select class="form-select shadow-none mb-1">
                                            <option value="" selected>Select Mobile Banking Type</option>
                                            <option value="bkash">Bkash</option>
                                            <option value="nagad">Nagad</option>
                                            <option value="rocket">Rocket</option>
                                            <option value="others">Others</option>
                                        </select>
                                        <div class="mb-2">
                                            <label for="mobile-banking-account-number" class="form-label">Account
                                                Number</label>
                                            <input type="number" class="form-control shadow-none"
                                                id="mobile-banking-account-number" placeholder="Account Number">
                                        </div>
                                        <div class="mb-2">
                                            <label for="mobile-banking-transaction-number"
                                                class="form-label">Transaction Number</label>
                                            <input type="number" class="form-control shadow-none"
                                                id="mobile-banking-transaction-number" placeholder="Transaction Number">
                                        </div>
                                        <div class="mb-2">
                                            <label for="mobile-banking-amount" class="form-label">Account Number</label>
                                            <input type="number" class="form-control shadow-none"
                                                id="mobile-banking-amount" placeholder="Amount">
                                        </div>
                                    </div>

                                    <div v-if="PaymentMethod == 'bank-deposit'" class="col-12"
                                        :class="showPaymentForm ? 'd-block' : 'd-none'">
                                        <div class="mb-2">
                                            <label for="bank-name" class="form-label">Bank Name</label>
                                            <input type="text" id="bank-name" class="form-control shadow-none mb-1"
                                                placeholder="Bank Name">
                                        </div>
                                        <div class="mb-2">
                                            <label for="bank-account-number" class="form-label">Bank Account
                                                Number</label>
                                            <input type="text" id="bank-account-number"
                                                class="form-control shadow-none mb-1" placeholder="Bank Account Number">
                                        </div>
                                        <div class="mb-2">
                                            <label for="bank-branch-name" class="form-label">Branch Name</label>
                                            <input type="text" in="bank-branch-name"
                                                class="form-control shadow-none mb-1" placeholder="Branch Name">
                                        </div>
                                        <div class="mb-2">
                                            <label for="bank-amount" class="form-label">Amount</label>
                                            <input type="text" id="bank-amount" class="form-control shadow-none mb-1"
                                                placeholder="Amount">
                                        </div>
                                    </div>

                                    <div v-if="PaymentMethod == 'credit-card'" class="col-12"
                                        :class="showPaymentForm ? 'd-block' : 'd-none'">
                                        <div class="mb-2">
                                            <label for="card-holder-name" class="form-label">Card Holder Name</label>
                                            <input type="text" dir="card-holder-name" name="card-holder-name"
                                                class="form-control" placeholder="Card Holder Name" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="card-number" class="form-label">Card Number</label>
                                            <input type="number" id="card-number" name="card-number"
                                                class="form-control" placeholder="Card Number" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="card-expire-date" class="form-label">Card Expired Date</label>
                                            <input type="month" id="card-expire-date" name="card-expire-date"
                                                class="form-control" placeholder="Card Expire Date" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="card-cvv" class="form-label">CVV</label>
                                            <input type="number" id="card-cvv" name="card-cvv"
                                                class="form-control" placeholder="CVV" />
                                        </div>
                                    </div>

                                    <div v-if="PaymentMethod == 'paypal'" class="col-12"
                                        :class="showPaymentForm ? 'd-block' : 'd-none'">
                                        <div class="mb-2">
                                            <label for="paypal-email" class="form-label">Paypal Email</label>
                                            <input type="number" id="paypal-email" name="paypal-email"
                                                class="form-control" placeholder="Paypal Email" />
                                        </div>
                                        <div class="mb-2">
                                            <label for="paypal-amount" class="form-label">Paypal Amount</label>
                                            <input type="number" id="paypal-amount" name="paypal-amount"
                                                class="form-control" placeholder="Paypal Amount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-0 mt-3">
                        <div class="col-md-12 text-center">
                            <button class="btn btn-lg btn-primary">Confirm Order</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
export default {
    name: 'Checkout',
    data() {
        return {
            cartCount: 0,
            shippingFullName: '',
            shippingContactNumber: '',
            shippingAddress: '',
            BillingFullName: '',
            shippingContactNumber: '',
            BillingAddress: '',
            PaymentMethod: '',
            showPaymentForm: false,
            sameAddress: false
        }
    },

    components: {
        CartItem
    },

    methods: {
        changePaymentMethod(event) {
            let paymentMethod = event.target.value;
            if (paymentMethod) {
                this.showPaymentForm = true
            }
            //console.log(paymentMethod);
        }
        
    }

}
</script>

<style scoped>
.no-arrow {
    -moz-appearance: textfield;
}

.no-arrow::-webkit-inner-spin-button {
    display: none;
}

.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>