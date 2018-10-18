"use strict" ;
{
    angular.module('app')
   .controller('PostController', function (){
        const $ctrl = this;
        $ctrl.removePost=function(index){ 
            $ctrl.allPosts.splice(index,1);     
          }
   })}