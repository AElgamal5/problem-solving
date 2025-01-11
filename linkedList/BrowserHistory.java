/**
 * 1472. Design Browser History
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/design-browser-history/
 */

// ---------------------------------------------------------------//
// ------------------------1st trial------------------------------//
// ---------------------------------------------------------------//
class Page {
    String url;
    Page next;
    Page prev;

    public Page(String url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}

public class BrowserHistory {

    private Page currentPage;

    public BrowserHistory(String homepage) {
        this.currentPage = new Page(homepage);
    }

    public void visit(String url) {
        this.currentPage.next = new Page(url);
        this.currentPage.next.prev = this.currentPage;
        this.currentPage = this.currentPage.next;
    }

    public String back(int steps) {

        while (steps != 0 && this.currentPage.prev != null) {
            this.currentPage = this.currentPage.prev;
            steps--;
        }

        return this.currentPage.url;
    }

    public String forward(int steps) {

        while (steps != 0 && this.currentPage.next != null) {
            this.currentPage = this.currentPage.next;
            steps--;
        }

        return this.currentPage.url;
    }
}