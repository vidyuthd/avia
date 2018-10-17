defmodule AdminAppWeb.DashboardController do
  use AdminAppWeb, :controller

  def index(conn, _params) do
    barchart = %{
      labels: ["2016-12-25", "2016-12-26", "2016-12-27", "2016-12-28", "2016-12-29"],
      data: [
        %{x: "2016-12-25", y: 20},
        %{x: "2016-12-26", y: 10},
        %{x: "2016-12-27", y: 20},
        %{x: "2016-12-28", y: 30},
        %{x: "2016-12-29", y: 100}
      ]
    }

    render(conn, "index.html", barchart: barchart)
  end
end
