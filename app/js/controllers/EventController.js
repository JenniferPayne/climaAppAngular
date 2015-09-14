'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Silva',
            date: '2/2/2016',
            time: '10:30h',
        }
    }
);