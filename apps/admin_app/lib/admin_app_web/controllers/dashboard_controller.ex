defmodule AdminAppWeb.DashboardController do
  use AdminAppWeb, :controller

  def index(conn, params) do
    render(conn, "index.html")
  end
end
