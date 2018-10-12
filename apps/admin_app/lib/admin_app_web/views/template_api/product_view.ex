defmodule AdminAppWeb.TemplateApi.ProductView do
  use AdminAppWeb, :view

  def render("product.json", %{response: response}) do
    Map.new()
  end
end
