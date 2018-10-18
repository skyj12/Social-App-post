"use strict";
{
    angular.module('app')
        .component('postform' , {
            templateUrl: 'components/postform/postform.html',
            controller: 'Controller',
            bindings: {
                addPost:'&'
            },

            }
        )}