package io.github.alesur.todoapp.restfullwebservice.helloworld;

public class PageLoader {
    private String page;
    public PageLoader(String page) {
        this.page = page;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    @Override
    public String toString() {
        return "PageLoader{" +
                "page='" + page + '\'' +
                '}';
    }
}
