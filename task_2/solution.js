function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку
    if (productSum == 0) {
        shippingPrice = 0;
    } else if (productSum >= freeShippingMinSum) {
        shippingPrice = 0;
    }
    // если productsSum равно 0,
    // то shippingPrice присвоить значение 0

    // если productsSum > или равен freeShippingMinSum,
    // то shippingPrice присвоить значение 0

    // Конец решения задания №2.1.

    return shippingPrice;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах
    if (productsSum >= discountMinSum) {
        discountPrice = (discountPart / 100) * productsSum;
    } else {
        discountPrice = 0;
    }


    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountPrice

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountPrice значение discountPart процентов от productsSum,
    // иначе присвойте discountPrice значения 0

    // Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
    let totalSum = productsSum - discountSum;

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum = totalSum + shippingSum;
    let freeShipping = shippingSum == 0 ? true : false;

    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
