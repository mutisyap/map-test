'use strict';

/**
 * @ngdoc function
 * @name mapTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapTestApp
 */
angular.module('mapTestApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.organizations = JSON.parse('[\n' +
      '    {\n' +
      '        "organisationId": 128,\n' +
      '        "organisationName": "SOVEREIGN SUITES",\n' +
      '        "latitude": -1.17408,\n' +
      '        "longitude": 36.7529,\n' +
      '        "roomCategoryId": 246,\n' +
      '        "roomCategoryName": "Junior Suite",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 143,\n' +
      '        "mealPlanName": "Half Board: HB",\n' +
      '        "mealPlanAbbreviation": "HB",\n' +
      '        "ppsValue": 99,\n' +
      '        "sglValue": 176,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 113,\n' +
      '        "contractName": "2019  Accomodation in SOVEREING SUITES CONTRACT rates for SOVEREING SUITES issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 113,\n' +
      '            "name": "2019  Accomodation in SOVEREING SUITES CONTRACT rates for SOVEREING SUITES issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2020-01-01",\n' +
      '            "serviceId": 128,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "bb279e48-9eb5-4bef-a84f-bea9db07bf42",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 128,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 128,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 330,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 232,\n' +
      '        "organisationName": "WINDORS GOLF HOTEL AND COUNTRY CLUB",\n' +
      '        "latitude": -1.21,\n' +
      '        "longitude": 36.8512,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 238,\n' +
      '        "organisationName": "SAFARI PARK HOTEL AND CASINO",\n' +
      '        "latitude": -1.22611,\n' +
      '        "longitude": 36.883,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 265,\n' +
      '        "organisationName": "EKA HOTEL",\n' +
      '        "latitude": -1.32417,\n' +
      '        "longitude": 36.8446,\n' +
      '        "roomCategoryId": 555,\n' +
      '        "roomCategoryName": "SUPERIOR ROOM",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 75,\n' +
      '        "sglValue": 130,\n' +
      '        "childSharingValue": 37.5,\n' +
      '        "contractId": 172,\n' +
      '        "contractName": "2019  Accomodation in EKA HOTEL CONTRACT rates for EKA HOTEL issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 172,\n' +
      '            "name": "2019  Accomodation in EKA HOTEL CONTRACT rates for EKA HOTEL issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2020-01-01",\n' +
      '            "serviceId": 248,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "795ab35b-409c-4a1e-bb74-3d2fb03bd50e",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 265,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 265,\n' +
      '            "lastUpdatedBy": "datamanager@safaritek",\n' +
      '            "lastUpdatedOn": "2019-01-25T11:52:02.375",\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 784,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 277,\n' +
      '        "organisationName": "KIMA HOTEL NAIROBI",\n' +
      '        "latitude": -1.28254,\n' +
      '        "longitude": 36.8307,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 283,\n' +
      '        "organisationName": "HOTEL LA MADA",\n' +
      '        "latitude": -1.24506,\n' +
      '        "longitude": 36.8589,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 284,\n' +
      '        "organisationName": "OAKWOOD HOTEL NAIROBI",\n' +
      '        "latitude": -1.28405,\n' +
      '        "longitude": 36.8235,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 362,\n' +
      '        "organisationName": "SENTRIM 680",\n' +
      '        "latitude": -1.28534,\n' +
      '        "longitude": 36.8205,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 363,\n' +
      '        "organisationName": "SENTRIM BOULEVARD HOTEL",\n' +
      '        "latitude": -1.27518,\n' +
      '        "longitude": 36.8134,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 371,\n' +
      '        "organisationName": "SIGONA GOLF SUITES",\n' +
      '        "latitude": -1.2234,\n' +
      '        "longitude": 36.6634,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 509,\n' +
      '        "organisationName": "TRIBE HOTEL",\n' +
      '        "latitude": -1.22711,\n' +
      '        "longitude": 36.8059,\n' +
      '        "roomCategoryId": 872,\n' +
      '        "roomCategoryName": "SUPERIOR ROOMS",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 100,\n' +
      '        "sglValue": 180,\n' +
      '        "childSharingValue": 0,\n' +
      '        "contractId": 318,\n' +
      '        "contractName": "2019  Accomodation in TRIBE HOTEL CONTRACT rates for TRIBE HOTEL issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 318,\n' +
      '            "name": "2019  Accomodation in TRIBE HOTEL CONTRACT rates for TRIBE HOTEL issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2018-10-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 464,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "d039b850-3993-4647-b2a0-6eb873080c35",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 509,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 509,\n' +
      '            "lastUpdatedBy": "datamanager@safaritek",\n' +
      '            "lastUpdatedOn": "2019-01-25T10:53:21.444",\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 1235,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 510,\n' +
      '        "organisationName": "TRADEMARK HOTEL",\n' +
      '        "latitude": -1.23027,\n' +
      '        "longitude": 36.8041,\n' +
      '        "roomCategoryId": 880,\n' +
      '        "roomCategoryName": "TRADEMARK KING/TWIN",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 70,\n' +
      '        "sglValue": 120,\n' +
      '        "childSharingValue": 0,\n' +
      '        "contractId": 319,\n' +
      '        "contractName": "2019  Accomodation in TRADEMARK HOTEL CONTRACT rates for TRADEMARK HOTEL issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 319,\n' +
      '            "name": "2019  Accomodation in TRADEMARK HOTEL CONTRACT rates for TRADEMARK HOTEL issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2018-10-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 465,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "d8b9f91d-115d-4f66-96a7-033e66a996a5",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 510,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 510,\n' +
      '            "lastUpdatedBy": "datamanager@safaritek",\n' +
      '            "lastUpdatedOn": "2019-01-25T11:26:51.062",\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 1236,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 31,\n' +
      '        "organisationName": "NAIROBI SERENA HOTEL",\n' +
      '        "latitude": -1.287,\n' +
      '        "longitude": 36.8145,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 158,\n' +
      '        "organisationName": "FAIRMONT THE NORFOLK HOTEL",\n' +
      '        "latitude": -1.27806,\n' +
      '        "longitude": 36.8165,\n' +
      '        "roomCategoryId": 330,\n' +
      '        "roomCategoryName": "QECZ-Fairmont Queen NS",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 171,\n' +
      '        "mealPlanName": "Bed and Breakfast: BB",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 142,\n' +
      '        "sglValue": 111,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 148,\n' +
      '        "contractName": "2019  Accomodation in FAIRMONT THE NORFOLK HOTEL CONTRACT rates for FAIRMONT THE NORFOLK HOTEL issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 148,\n' +
      '            "name": "2019  Accomodation in FAIRMONT THE NORFOLK HOTEL CONTRACT rates for FAIRMONT THE NORFOLK HOTEL issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 153,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "117f363b-e3e4-40ab-842a-ccff5ce18c01",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 158,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 158,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 429,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 255,\n' +
      '        "organisationName": "NAIROBI HILTON HOTEL",\n' +
      '        "latitude": -1.28822,\n' +
      '        "longitude": 36.8186,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 278,\n' +
      '        "organisationName": "HOTEL LA MADA",\n' +
      '        "latitude": -1.24506,\n' +
      '        "longitude": 36.8589,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 280,\n' +
      '        "organisationName": "KAHAMA HOTEL NAIROBI",\n' +
      '        "latitude": -1.27755,\n' +
      '        "longitude": 36.822,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 320,\n' +
      '        "organisationName": "INTERCONTINENTAL NAIROBI",\n' +
      '        "latitude": -1.28835,\n' +
      '        "longitude": 36.8232,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 53,\n' +
      '        "organisationName": "THE RESIDENCES AT KAREN",\n' +
      '        "latitude": -1.34592,\n' +
      '        "longitude": 36.7152,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 100,\n' +
      '        "organisationName": "Karen Blixen Camp",\n' +
      '        "latitude": -1.33986,\n' +
      '        "longitude": 36.7083,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 112,\n' +
      '        "organisationName": "GIRAFFE MANOR",\n' +
      '        "latitude": -1.37549,\n' +
      '        "longitude": 36.7447,\n' +
      '        "roomCategoryId": 198,\n' +
      '        "roomCategoryName": "STANDARD ROOM",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 527,\n' +
      '        "sglValue": 714,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 82,\n' +
      '        "contractName": "2019  Accomodation in GIRAFFE MANOR CONTRACT rates for GIRAFFE MANOR issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 82,\n' +
      '            "name": "2019  Accomodation in GIRAFFE MANOR CONTRACT rates for GIRAFFE MANOR issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-16",\n' +
      '            "endDate": "2020-01-15",\n' +
      '            "serviceId": 115,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "bd8e8862-a8c6-4bf4-be89-f706f01f900d",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 112,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 112,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 278,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 130,\n' +
      '        "organisationName": "HEMINGWAYS NAIROBI",\n' +
      '        "latitude": -1.34271,\n' +
      '        "longitude": 36.7053,\n' +
      '        "roomCategoryId": 250,\n' +
      '        "roomCategoryName": "Deluxe room",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 145,\n' +
      '        "mealPlanName": "Bed and Breakfast: BB",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 238,\n' +
      '        "sglValue": 290,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 114,\n' +
      '        "contractName": "2019  ACCOMODATION CONTRACT rates for HEMINGWAYS NAIROBI issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 114,\n' +
      '            "name": "2019  ACCOMODATION CONTRACT rates for HEMINGWAYS NAIROBI issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 132,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "e7774c02-805b-4016-bc2f-0947637e6bcd",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 130,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 130,\n' +
      '            "lastUpdatedBy": "datamanager@safaritek",\n' +
      '            "lastUpdatedOn": "2019-02-01T15:24:59.305",\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 338,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 147,\n' +
      '        "organisationName": "VILLA ROSA KEMPINSKI NAIROBI",\n' +
      '        "latitude": -1.27143,\n' +
      '        "longitude": 36.8089,\n' +
      '        "roomCategoryId": 297,\n' +
      '        "roomCategoryName": "SUPERIOR ROOMS",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 155,\n' +
      '        "mealPlanName": "Bed and Breakfast: BB",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 128,\n' +
      '        "sglValue": 235,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 141,\n' +
      '        "contractName": "2019  Accomodation in VILLA ROSA KEMPINSKI NAIROBI CONTRACT rates for VILLA ROSA KEMPINSKI NAIROBI issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 141,\n' +
      '            "name": "2019  Accomodation in VILLA ROSA KEMPINSKI NAIROBI CONTRACT rates for VILLA ROSA KEMPINSKI NAIROBI issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 145,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "9b740415-0c2d-4efa-998b-dcfa4e2f200f",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 147,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 147,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 403,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 185,\n' +
      '        "organisationName": "GLORY PALACE HOTEL",\n' +
      '        "latitude": -1.27191,\n' +
      '        "longitude": 36.8285,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 192,\n' +
      '        "organisationName": "NAIROBI TENTED CAMP",\n' +
      '        "latitude": -1.36327,\n' +
      '        "longitude": 36.7765,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 216,\n' +
      '        "mealPlanName": "Half Board: HB",\n' +
      '        "mealPlanAbbreviation": "HB",\n' +
      '        "ppsValue": 9450,\n' +
      '        "sglValue": 2780,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 169,\n' +
      '        "contractName": "2019  Accomodation in NAIROBI TENTED CAMP CONTRACT rates for NAIROBI TENTED CAMP issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 169,\n' +
      '            "name": "2019  Accomodation in NAIROBI TENTED CAMP CONTRACT rates for NAIROBI TENTED CAMP issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2020-01-01",\n' +
      '            "serviceId": 182,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "a792bd03-7926-4091-b8e0-f4c75deabeb5",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 192,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 192,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 211,\n' +
      '            "currencyAbbreviation": "KES",\n' +
      '            "dimensionSetId": 512,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 211,\n' +
      '        "currencyAbbreviation": "KES",\n' +
      '        "currencySymbol": "shs"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 235,\n' +
      '        "organisationName": "THE PANARI RESIDENCE",\n' +
      '        "latitude": -1.26198,\n' +
      '        "longitude": 36.7926,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 239,\n' +
      '        "organisationName": "PALACINA THE RESIDENCE AND SUITE NAIROBI HOTEL",\n' +
      '        "latitude": -1.28293,\n' +
      '        "longitude": 36.792,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 242,\n' +
      '        "organisationName": "JACARANDA HOTEL NAIROBI",\n' +
      '        "latitude": -1.26248,\n' +
      '        "longitude": 36.8016,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 268,\n' +
      '        "organisationName": "HOUSE OF WAINE",\n' +
      '        "latitude": -1.35634,\n' +
      '        "longitude": 36.7214,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 352,\n' +
      '        "mealPlanName": "Full Board: null",\n' +
      '        "mealPlanAbbreviation": "FB",\n' +
      '        "ppsValue": 262.5,\n' +
      '        "sglValue": 360,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 289,\n' +
      '        "contractName": "2019  Accomodation in HOUSE OF WAINE CONTRACT rates for HOUSE OF WAINE issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 289,\n' +
      '            "name": "2019  Accomodation in HOUSE OF WAINE CONTRACT rates for HOUSE OF WAINE issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 251,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "cc36d6ba-3e44-4f1c-922d-d35f91d5dbbd",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 268,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 268,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 1128,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 290,\n' +
      '        "organisationName": "SANKARA HOTEL NAIROBI",\n' +
      '        "latitude": -1.26271,\n' +
      '        "longitude": 36.8023,\n' +
      '        "roomCategoryId": 594,\n' +
      '        "roomCategoryName": "SUPERIOR ROOM",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 110,\n' +
      '        "sglValue": 190,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 173,\n' +
      '        "contractName": "2019  Accomodation in SANKARA HOTEL NAIROBI CONTRACT rates for SANKARA HOTEL NAIROBI issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 173,\n' +
      '            "name": "2019  Accomodation in SANKARA HOTEL NAIROBI CONTRACT rates for SANKARA HOTEL NAIROBI issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 270,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "ce3fd3fe-0ded-4d02-bb96-d3648da0fcec",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 290,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 290,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 785,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 293,\n' +
      '        "organisationName": "FOUR POINTS BY SHERATON  HURLINGHAM",\n' +
      '        "latitude": -1.2938,\n' +
      '        "longitude": 36.7952,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 326,\n' +
      '        "organisationName": "THE EMORY HOTEL",\n' +
      '        "latitude": -1.27606,\n' +
      '        "longitude": 36.7924,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 327,\n' +
      '        "organisationName": "NGONG HILL HOTEL",\n' +
      '        "latitude": -1.29185,\n' +
      '        "longitude": 36.8104,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 328,\n' +
      '        "organisationName": "WESTEND HOTEL",\n' +
      '        "latitude": -1.25756,\n' +
      '        "longitude": 36.7991,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 329,\n' +
      '        "organisationName": "SWIS LENANA MOUNT HOTEL",\n' +
      '        "latitude": -1.28994,\n' +
      '        "longitude": 36.8046,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 333,\n' +
      '        "organisationName": "PRIDE INN WESTLANDS",\n' +
      '        "latitude": -1.26661,\n' +
      '        "longitude": 36.8059,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 334,\n' +
      '        "organisationName": "PRIDEINN RAPHTA",\n' +
      '        "latitude": -1.26404,\n' +
      '        "longitude": 36.7847,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 338,\n' +
      '        "organisationName": "UTALI HOTEL",\n' +
      '        "latitude": -1.26658,\n' +
      '        "longitude": 36.7929,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 339,\n' +
      '        "organisationName": "PRIDE INN SUITE LANTANA",\n' +
      '        "latitude": -1.26658,\n' +
      '        "longitude": 36.7929,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 342,\n' +
      '        "organisationName": "THE CONCORD HOTEL&SUITES",\n' +
      '        "latitude": -1.25456,\n' +
      '        "longitude": 36.8155,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 344,\n' +
      '        "organisationName": "WEST WOOD HOTEL",\n' +
      '        "latitude": -1.25348,\n' +
      '        "longitude": 36.8054,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 345,\n' +
      '        "organisationName": "AZURE HOTEL NAIROBI",\n' +
      '        "latitude": -1.26688,\n' +
      '        "longitude": 36.7987,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 351,\n' +
      '        "organisationName": "CROWNE PLAZA NAIROBI AIRPORT",\n' +
      '        "latitude": -1.30042,\n' +
      '        "longitude": 36.8156,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 358,\n' +
      '        "organisationName": "ROYAL TULIP",\n' +
      '        "latitude": -1.29063,\n' +
      '        "longitude": 36.7898,\n' +
      '        "roomCategoryId": 753,\n' +
      '        "roomCategoryName": "STANDARD ROOM",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": 68,\n' +
      '        "sglValue": 115,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 200,\n' +
      '        "contractName": "2019  Accomodation in ROYAL TULIP CONTRACT rates for ROYAL TULIP issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 200,\n' +
      '            "name": "2019  Accomodation in ROYAL TULIP CONTRACT rates for ROYAL TULIP issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2020-01-01",\n' +
      '            "serviceId": 330,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "3e0b87f6-c62c-4d57-befd-9bafc7523ab2",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 358,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 358,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 844,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 397,\n' +
      '        "organisationName": "RADISSON BLU",\n' +
      '        "latitude": -1.30228,\n' +
      '        "longitude": 36.8167,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 135,\n' +
      '        "organisationName": "THE BOMA NAIROBI",\n' +
      '        "latitude": -1.32415,\n' +
      '        "longitude": 36.8335,\n' +
      '        "roomCategoryId": 264,\n' +
      '        "roomCategoryName": "Superior Room",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 150,\n' +
      '        "mealPlanName": "Bed and Breakfast: BB",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 80,\n' +
      '        "sglValue": 140,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 120,\n' +
      '        "contractName": "2019  Accomodation in THE BOMA NAIROBI CONTRACT rates for THE BOMA NAIROBI issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 120,\n' +
      '            "name": "2019  Accomodation in THE BOMA NAIROBI CONTRACT rates for THE BOMA NAIROBI issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 134,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "2d9a81df-0f4d-402e-9dd8-a9fc5d105f81",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 135,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 135,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 352,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 234,\n' +
      '        "organisationName": "THE PANARI HOTEL NAIROBI",\n' +
      '        "latitude": -1.32885,\n' +
      '        "longitude": 36.8559,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 237,\n' +
      '        "organisationName": "CANIVORE RESTURANT NAIROBI",\n' +
      '        "latitude": -1.32845,\n' +
      '        "longitude": 36.8005,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 285,\n' +
      '        "organisationName": "HUNTERS LODGE",\n' +
      '        "latitude": -2.2114,\n' +
      '        "longitude": 37.7146,\n' +
      '        "roomCategoryId": null,\n' +
      '        "roomCategoryName": null,\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": null,\n' +
      '        "mealPlanName": null,\n' +
      '        "mealPlanAbbreviation": null,\n' +
      '        "ppsValue": null,\n' +
      '        "sglValue": null,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": null,\n' +
      '        "contractName": null,\n' +
      '        "contractDTO": null,\n' +
      '        "currencyId": null,\n' +
      '        "currencyAbbreviation": null,\n' +
      '        "currencySymbol": null\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 292,\n' +
      '        "organisationName": "FOUR POINTS BY SHERATON NAIROBI",\n' +
      '        "latitude": -1.34111,\n' +
      '        "longitude": 36.9174,\n' +
      '        "roomCategoryId": 598,\n' +
      '        "roomCategoryName": "TRADITIONAL KING",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 349,\n' +
      '        "mealPlanName": "Bed and Breakfast: null",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 65,\n' +
      '        "sglValue": 110,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 288,\n' +
      '        "contractName": "2019  Accomodation in FOUR POINTS BY SHERATON NAIROBI CONTRACT rates for FOUR POINTS BY SHERATON NAIROBI issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 288,\n' +
      '            "name": "2019  Accomodation in FOUR POINTS BY SHERATON NAIROBI CONTRACT rates for FOUR POINTS BY SHERATON NAIROBI issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 271,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "20aae812-c053-473d-b3f1-1975a512e3f1",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 292,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 292,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 1127,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    },\n' +
      '    {\n' +
      '        "organisationId": 467,\n' +
      '        "organisationName": "HILTON GARDEN INN",\n' +
      '        "latitude": -1.35414,\n' +
      '        "longitude": 36.907,\n' +
      '        "roomCategoryId": 846,\n' +
      '        "roomCategoryName": "HILTON STANDARD ROOM",\n' +
      '        "roomCategoryAbbreviation": null,\n' +
      '        "mealPlanId": 353,\n' +
      '        "mealPlanName": "Bed and Breakfast: null",\n' +
      '        "mealPlanAbbreviation": "BB",\n' +
      '        "ppsValue": 80,\n' +
      '        "sglValue": 130,\n' +
      '        "childSharingValue": null,\n' +
      '        "contractId": 290,\n' +
      '        "contractName": "2019  Accomodation in HILTON GARDEN INN CONTRACT rates for HILTON GARDEN INN issued to SawaSawa Africa",\n' +
      '        "contractDTO": {\n' +
      '            "id": 290,\n' +
      '            "name": "2019  Accomodation in HILTON GARDEN INN CONTRACT rates for HILTON GARDEN INN issued to SawaSawa Africa",\n' +
      '            "targetId": 1,\n' +
      '            "type": "CONTRACT",\n' +
      '            "status": "ACTIVE",\n' +
      '            "contentStatus": "DRAFT",\n' +
      '            "startDate": "2019-01-01",\n' +
      '            "endDate": "2019-12-31",\n' +
      '            "serviceId": 429,\n' +
      '            "marketId": -1,\n' +
      '            "uuid": "6a7e9b92-e002-4f0b-808f-c1fd766c20f6",\n' +
      '            "year": 2019,\n' +
      '            "issuerId": 467,\n' +
      '            "issuerName": null,\n' +
      '            "issuerUuid": null,\n' +
      '            "seasonGroupId": null,\n' +
      '            "supplierId": 467,\n' +
      '            "lastUpdatedBy": null,\n' +
      '            "lastUpdatedOn": null,\n' +
      '            "currencyId": 204,\n' +
      '            "currencyAbbreviation": "USD",\n' +
      '            "dimensionSetId": 1131,\n' +
      '            "dimensionSetName": "Custom Rates Structure"\n' +
      '        },\n' +
      '        "currencyId": 204,\n' +
      '        "currencyAbbreviation": "USD",\n' +
      '        "currencySymbol": "&#36;"\n' +
      '    }\n' +
      ']');

    $scope.centerLat = $scope.organizations[0].latitude;
    $scope.centerLong = $scope.organizations[0].longitude;

    console.log('vm.centerLat = '+ $scope.centerLat);
    console.log('vm.centerLong = '+$scope.centerLong);

    $scope.center = [-1.17408, 36.7529];

  });
