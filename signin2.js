const perfectmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
var mail = document.getElementById("zmail");
app= angular.module("min",[]);
app.controller("star",xuly);

	
    function xuly($scope)
    {
        $scope.checkmail = function()
        {
            if(!perfectmail.test($scope.mail))
            {
                return true;
            }
            else{
                return false;
            }
        }
        $scope.check = function()
        {
            if (($scope.st1 || $scope.st2 || $scope.st3 || $scope.st4 || $scope.st5 )
            && $scope.sex && ($scope.country&& $scope.country!=0) && 
            (!isNaN($scope.pass) && ( $scope.pass>=7)) && 
            ($scope.user != undefined) && ($scope.mail != undefined)) 
                {
                    alert("Sign Up Success");
                } 
                else 
                {
                    alert("You have not entered information!!!");
                }
        }
        
    }
    
    

