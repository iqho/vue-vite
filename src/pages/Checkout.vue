<template>
  <div class="container px-3">
    <h3>Checkout ( {{ $store.getters.cartCount }} )</h3>
    <div class="row g-0">
        <div class="col-md-8">
            <CartItem/>
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
                            <input type="text" class="form-control" placeholder="Full Name" id="shippingFullName" v-model="shippingFullName" autofocus required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="shippingContactNumber" class="form-label">Contact Number</label>
                            <input type="number" pattern="[0-9]" class="form-control no-arrow" placeholder="01xxxxxxxxx" id="shippingContactNumber" v-model="shippingContactNumber" required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="shippingAddress" class="form-label">Full Address</label>
                            <textarea class="form-control" placeholder="Full Address" v-model="shippingAddress" required></textarea>
                        </div>

                    </div>   
                </div>


                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Billing Address</div>
                    </div>
                    <div class="card-body">

                        <div class="form-group mb-2">
                            <label for="BillingFullName">Full Name</label>
                            <input type="text" class="form-control" placeholder="Full Name" id="BillingFullName" v-model="BillingFullName" required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="BillingContactNumber" class="form-label">Contact Number</label>
                            <input type="number" pattern="[0-9]" class="form-control no-arrow" placeholder="01xxxxxxxxx" id="BillingContactNumber" v-model="shippingContactNumber" required>
                        </div>

                        <div class="form-group mb-2">
                            <label for="BillingAddress" class="form-label">Full Address</label>
                            <textarea class="form-control" placeholder="Full Address" v-model="BillingAddress" required></textarea>
                        </div>

                    </div>   
                </div>


                <div class="card">
                    <div class="card-header">
                        Payment Method
                    </div>
                    <div class="card-body">
                        <div class="form-group mb-2">
                            <label for="PaymentMethod" class="form-label">Payment Method</label>
                            <select class="form-control" id="PaymentMethod" v-model="PaymentMethod"  @change="changePaymentMethod($event)" required>
                                <option value="">Select Payment Method</option>
                                <option value="mobile-banking">Mobile Banking</option>
                                <option value="bank-deposit">Bank Deposit</option>
                                <option value="credit-card">Credit Card</option>
                                <option value="debit-card">Debit Card</option>
                                <option value="paypal">Paypal</option>
                            </select>

                            <div v-if="PaymentMethod == 'mobile-banking'" class="border border-gray" :class="showPaymentForm ? 'd-block' : 'd-none'">
                                
                            </div>

                            <div v-if="PaymentMethod == 'bank-deposit'" class="border border-gray" :class="showPaymentForm ? 'd-block' : 'd-none'">
                                bank-deposit
                            </div>

                            <div v-if="PaymentMethod == 'credit-card'" class="border border-gray" :class="showPaymentForm ? 'd-block' : 'd-none'">
                                credit-card
                            </div>

                            <div v-if="PaymentMethod == 'debit-card'" class="border border-gray" :class="showPaymentForm ? 'd-block' : 'd-none'">
                                debit-card
                            </div>

                            <div v-if="PaymentMethod == 'paypal'" class="border border-gray" :class="showPaymentForm ? 'd-block' : 'd-none'">
                               paypal
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
            showPaymentForm: false
        }
    },

    components: {
        CartItem
    },

    methods: {
        changePaymentMethod(event){
            let paymentMethod = event.target.value;
            if(paymentMethod){
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