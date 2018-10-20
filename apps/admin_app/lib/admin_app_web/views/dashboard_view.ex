defmodule AdminAppWeb.DashboardView do
  use AdminAppWeb, :view

  alias Snitch.Data.Model

  def get_order_state_count() do
    Model.Order.get_order_count_by_state()
  end

  def get_product_state_count() do
    Model.Product.get_product_count_by_state()
  end

  def get_order_datapoints() do
    Model.Order.get_order_count_by_date()
    |> format_response()
  end

  def get_payment_datapoints() do
    Model.Payment.get_payment_count_by_date()
    |> format_response()
  end

  def only_key(data, key) do
    data |> Enum.into([], fn x -> x |> Map.get(key) end)
  end

  def format_response(data) do
    %{
      labels: only_key(data, :date),
      data: only_key(data, :count)
    }
  end
end
