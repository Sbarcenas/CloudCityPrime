import { app, rest } from "./conf";

/*export const login = async (email, password) => {
  //await localStorage.setItem("username", email);
  //await localStorage.setItem("password", password);
  return app.authenticate({ strategy: "local", email, password });
};*/

export const logout = async () => {
  await app.logout();
};

export const usersService = app.service("users");
export const currentService = app.service("current");
export const passwordRecoveryService = app.service("recovery-password");

export const establishmentsService = app.service("establishments");
export const favoriteEstablishmentsService = app.service(
  "users-favorite-establishments"
);

export const benefitsService = app.service("benefits");
export const usersBenefitsService = app.service("users-benefits");
usersBenefitsService.timeout = 10000;

export const categoriesService = app.service("categories");
export const locationCitiesCategoriesService = app.service(
  "locations-cities-categories"
);

export const citiesService = app.service("locations-cities");
export const cmsService = app.service("cms");

export const claimBenefitService = app.service("claim-benefit");

export const usersCreditCardsService = app.service("users-credit-cards");
export const productsService = app.service("products");
export const paymentProcessDataService = app.service("process-payment-data");
paymentProcessDataService.timeout = 80000;
export const membershipsService = app.service("memberships");
export const claimCouponService = app.service("claim-coupon");
export const readUserService = app.service("read-user-token");
export const readUserTokenHistoryService = app.service(
  "read-user-token-history"
);
