"use strict" ;
{
    angular.module('app')
   .controller('SocialpostController', function (){
     const $ctrl= this;
    $ctrl.allPosts = [
    {title: 'Cat',
    body:'Lorem ipsum dolor sit amet, no ferri urbanitas cum, pro nostro dolores blandit cu.'},
    {title: 'Dog',
    body:'Lorem ipsum dolor sit amet, no ferri urbanitas cum, pro nostro dolores blandit cu.'},
    {title: 'Pig',
    body:'Lorem ipsum dolor sit amet, no ferri urbanitas cum, pro nostro dolores blandit cu.'},
    {title: 'Cow',
    body:'Lorem ipsum dolor sit amet, no ferri urbanitas cum, pro nostro dolores blandit cu.'},
    {title: 'Whale',
    body:'Lorem ipsum dolor sit amet, no ferri urbanitas cum, pro nostro dolores blandit cu.'}
    ];

    console.log($ctrl.allPosts)
    $ctrl.addPost = (newPost) => {
      $ctrl.allPosts.push({
        title: newPost.title,
        body: newPost.body
      });      
    }
   
    
  }
)}
