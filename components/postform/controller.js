"use strict" ;
{
    angular.module('app')
   .controller('Controller', function (){
        const $ctrl = this;
        $ctrl.showForm = () => {
            $ctrl.visible = true;
          };
          $ctrl.closeForm = () => {
            $ctrl.visible = false;
            $ctrl.newPost = {};
          };
        })}  