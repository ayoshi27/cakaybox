"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = void 0;
const core_1 = require("@ts-rest/core");
const expends_contract_1 = require("./expends.contract");
const budgets_contract_1 = require("./budgets.contract");
const categories_contract_1 = require("./categories.contract");
const payers_contract_1 = require("./payers.contract");
const payment_methods_contract_1 = require("./payment-methods.contract");
const counting_items_contract_1 = require("./counting-items.contract");
const custom_counting_items_contract_1 = require("./custom-counting-items.contract");
const favorite_expend_item_contract_1 = require("./favorite-expend-item.contract");
const c = (0, core_1.initContract)();
exports.contract = c.router({
    expends: expends_contract_1.expendsContract,
    budgets: budgets_contract_1.budgetsContract,
    categories: categories_contract_1.categoriesContract,
    payers: payers_contract_1.payersContract,
    paymentMethods: payment_methods_contract_1.paymentMethodsContract,
    countingItems: counting_items_contract_1.countingItemsContract,
    customCountingItems: custom_counting_items_contract_1.customCountingItemsContract,
    favoriteExpendItem: favorite_expend_item_contract_1.favoriteExpendItemContract,
});
