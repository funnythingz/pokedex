Template.body.helpers({

    greeting: () => {
        return "ahya";
    }

});

Template.body.events({

    'click .hoge' : (event)=> {
        event.preventDefault();
        console.log("hoge");
    }

});
