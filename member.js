function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/skills-member.html',
        scope: {
            member: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('member', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    scope.member = newValue;
                }
            });
        }
    };
} 