Template.body.helpers({
    greeting: function () {
        return "ahya";
    }
});

Template.body.events({
    'click .hoge': function (event) {
        event.preventDefault();
        console.log("hoge");
    }
});
;Template.footer.helpers({
    copyright: function () {
        return "funnythingz";
    }
});
;Template.header.helpers({
    title: function () {
        return "POKEDEX";
    },
    description: function () {
        return "This is `MY POKEDEX`";
    }
});
