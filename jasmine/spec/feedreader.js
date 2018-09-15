/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        beforeEach(function() {
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });
    
          });
        
        

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function() {
            allFeeds.forEach((feed)=>{
                expect(feed).toBeDefined();
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual("");

            })
           
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function() {
            allFeeds.forEach((feed)=>{
                expect(feed).toBeDefined();
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual("");

            })
           
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        beforeEach(function() {
          //  loadStyleFixtures('../css/style.css');
          //let body=$('body');
        });
        it("should be hidden by default",function(){
            let body=$('body');
            expect(body).not.toBeNull();
            expect(body).not.toBeUndefined();
            expect('body').toHaveClass('menu-hidden');
            expect(body.hasClass('menu-hidden')).toBe(true);
           
           //expect($('body').hasClass('menu-hidden')).toBe(true);


        });

        it("should change visibility when the menu icon is clicked",function(){         
           
            $('.menu-icon-link').click();
            var menuhidden= $("body").hasClass('menu-hidden');
            (!menuhidden)? expect('body').not.toHaveClass('menu-hidden'): expect('body').toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
             var menuhidden= $("body").hasClass('menu-hidden');
            (!menuhidden)? expect('body').not.toHaveClass('menu-hidden'): expect('body').toHaveClass('menu-hidden');

        });

    });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
        
        describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(0).done(function (result) {
                    returnedJSON = result.feed.entries;;        
                    // Invoke the special done callback
                    done();
                });
            });
            it("should be at least a single .entry element within the .feed container",function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);
                
                var container=$('.feed');
               
                expect(returnedJSON).not.toEqual({});
                expect(returnedJSON).not.toBeUndefined();
               
            });
        }); */

        describe('Initial Entries', () => {
           
            beforeEach((done) => {
                loadFeed(0, done);
            });
            it('has at least one entry in feed', (done) => {
                var feed=$('.feed');
                let entry = $('.feed .entry'); // Select all entry elements that are children of feed.
                expect(feed).not.toBeNull();
                expect(feed).toBeDefined();
                expect(entry).toBeDefined();
               
                done();
            });
    
        });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        describe('New Feed Selection', () => {
            let firstFeedList,secondFeedList;
            beforeEach((done) => {
                loadFeed(0,function(){
                     firstFeedList = $('.feed .entry').html();
                    loadFeed(1,function(){
                         secondFeedList = $('.feed .entry').html();
                        done();
                    });
                    //done();
                });
            });
            it('should actually changesfor the content', (done) => {
               
                expect(firstFeedList).not.toBeNull();
                expect(firstFeedList).toBeDefined();
                expect(secondFeedList).not.toBeNull();
                expect(secondFeedList).toBeDefined();                
                expect(firstFeedList).not.toEqual(secondFeedList);
                done();
            });
    
        });
}());
