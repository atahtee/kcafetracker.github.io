app.controller('MainController', ['$scope', function ($scope) {
    $scope.today = new Date();
    $scope.foodType = ["APPETIZERS", "MAINS", "EXTRAS"];
    $scope.appetizers = [
      {
          type: 'APPETIZERS',
          name: 'Caprese',
          description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
          price: 4.95
      },
      {
          type: 'APPETIZERS',
          name: 'Mozzarella Sticks',
          description: 'Served with marinara sauce.',
          price: 3.95
      },
      {
          type: 'APPETIZERS',
          name: 'Bruschetta',
          description: 'Grilled bread garlic, tomatoes, olive oil',
          price: 6.95
      }
    ];

    $scope.mains = [
       {
           type: 'MAINS',
           name: 'Honey Mustard Chicken Wings',
           description: 'A delicious and simple recipe for fried chicken wings with honey and mustard sauce.',
           price: 4.95
       },
      {
          type: 'MAINS',
          name: 'Mutton Lonche',
          description: 'Gutsy pickled mutton.',
          price: 4.95
      },
      {
          type: 'MAINS',
          name: 'Thalipeeth',
          description: 'Crispy hand made pan cake applied with butter and served with curd',
          price: 1.95
      }
    ];

    $scope.extras = [
     {
         type: 'EXTRAS',
         name: 'Deluxe Scotch',
         description: 'Black Label, Jack Daniel, Chivas Rigal.',
         price: 5.24
     },
    {
        type: 'EXTRAS',
        name: 'Premium Scotch',
        description: 'Black Dog, Teachers, Vat69.',
        price: 3.95
    },
    {
        type: 'EXTRAS',
        name: 'Premium',
        description: 'Blenders Pride, Royal Stag, Signature',
        price: 1.95
    }
    ];

    $scope.showByCuisineType = function (n) {
        // here we are setting n.type - that is scope.appetizers.type to be rqual to the selected value 
        // in the ng-model variable of foodType
        return n.type == $scope.selectCuisine;
    };
}]);