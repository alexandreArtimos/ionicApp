angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope,$http, Friends) {
 $http.get('http://localhost:8080/FirstApp/rest/members').success(function(data) {
        $scope.friends = data;
      });
   
})

.controller('FriendDetailCtrl', function($scope, $http, $stateParams, Friends) {
  console.info('http://localhost:8080/FirstApp/rest/members/' + $stateParams.id);
  $http.get('http://localhost:8080/FirstApp/rest/members/' + $stateParams.id)
      .success(function(data) {
          $scope.friend = data;
      });

  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
