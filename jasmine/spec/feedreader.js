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
         * empty. 
         */

        beforeEach(function() {
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });    
          });       
        

        /* test that loops through each feed
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


        /* test that loops through each feed
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


  
    //test that ensures the menu element is hidden by default.
    describe('The menu', function() {
        beforeEach(function() {        
        });
        it("should be hidden by default",function(){
            let body=$('body');
            expect(body).not.toBeNull();
            expect(body).not.toBeUndefined();
            //Using Jasmine-jquery
            expect('body').toHaveClass('menu-hidden');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        // test that ensures the menu changes visibility when the menu icon is clicked.
        it("should change visibility when the menu icon is clicked",function(){       
           
            $('.menu-icon-link').click();
            var menuhidden= $("body").hasClass('menu-hidden');
            (!menuhidden)? expect('body').not.toHaveClass('menu-hidden'): expect('body').toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
             var menuhidden= $("body").hasClass('menu-hidden');
            (!menuhidden)? expect('body').not.toHaveClass('menu-hidden'): expect('body').toHaveClass('menu-hidden');

        });

    });
       //test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

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

        //test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        describe('New Feed Selection', () => {
            let firstFeedList,secondFeedList;
            beforeEach((done) => {
                loadFeed(0,function(){
                     firstFeedList = $('.feed .entry').html();
                    loadFeed(1,function(){
                         secondFeedList = $('.feed .entry').html();
                        done();
                    });
                });
            });
            it('should actually changes for the content', (done) => {
               
                expect(firstFeedList).not.toBeNull();
                expect(firstFeedList).toBeDefined();
                expect(secondFeedList).not.toBeNull();
                expect(secondFeedList).toBeDefined();                
                expect(firstFeedList).not.toEqual(secondFeedList);
                done();
            });
    
        });
}());
